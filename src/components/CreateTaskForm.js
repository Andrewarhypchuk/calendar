import React from "react";
import { Box, Button, TextField } from "@mui/material";
import {
  FormBox,
  FormInput,
  SpaceBetweenBox,
} from "../styleComponents/StyledComponents";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEvent, deleteEvent } from "../redux/currentMonth-slice";
import { getEvent } from "../utils/getEvent";

const ModalForm = ({ handleClose, eventData }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      title: eventData?.title,
      description: eventData?.description,
      date: eventData?.date,
      time: eventData?.time,
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    let hasErrors = false;
    for (const [key, value] of Object.entries(data)) {
      if (value === "" || value === undefined) {
        setError(key, {
          type: "required",
        });
        hasErrors = true;
      }
    }
    if (!hasErrors) {
      const editedData = { ...eventData };
      editedData.title = data.title;
      editedData.description = data.description;
      editedData.date = data.date;
      editedData.time = data.time;
      dispatch(addEvent(getEvent(editedData)));
      handleClose();
    }
  };
  const inputHandler = (inputName, value) => {
    setValue(inputName, value);
    if (value.trim() === "" || value === undefined) {
      setError(inputName, {
        type: "required",
      });
    } else {
      clearErrors(inputName);
    }
  };
  const deleteEventHandler = () => {
    dispatch(deleteEvent(eventData.id));
  };
  return (
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name={"title"}
        render={() => {
          return (
            <TextField
              type="text"
              id="title"
              name="title"
              label="Title"
              required
              defaultValue={eventData?.title}
              margin="normal"
              onChange={(e) => {
                inputHandler("title", e.target.value);
              }}
              error={!!errors.title}
            />
          );
        }}
      />
      <Controller
        control={control}
        name={"description"}
        render={() => {
          return (
            <TextField
              type="text"
              id="description"
              name="description"
              required
              margin="normal"
              defaultValue={eventData?.description}
              onChange={(e) => {
                inputHandler("description", e.target.value);
              }}
              error={!!errors.description}
            />
          );
        }}
      />
      <Controller
        control={control}
        name={"date"}
        render={() => {
          return (
            <FormInput
              type="date"
              id="date"
              name="date"
              required
              defaultValue={eventData?.date}
              onChange={(e) => {
                inputHandler("date", e.target.value);
              }}
              error={!!errors.date}
            />
          );
        }}
      />
      <Controller
        control={control}
        name={"time"}
        render={() => {
          return (
            <FormInput
              type="time"
              id="time"
              name="time"
              required
              defaultValue={eventData?.time}
              onChange={(e) => {
                inputHandler("time", e.target.value);
              }}
              error={!!errors.time}
            />
          );
        }}
      />
      {eventData && (
        <SpaceBetweenBox>
          <Box>
            <Box>Created at: {eventData?.createdAt}</Box>
            <Box>Updated at: {eventData?.updatedAt}</Box>
          </Box>
          <Button color="error" onClick={deleteEventHandler}>
            Delete
          </Button>
        </SpaceBetweenBox>
      )}

      <SpaceBetweenBox>
        <Button color="error" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          color="success"
          type="submit"
          onClick={handleSubmit(onSubmit)}
          disabled={Object.keys(errors).length > 0}
        >
          Submit
        </Button>
      </SpaceBetweenBox>
    </FormBox>
  );
};

export default ModalForm;
