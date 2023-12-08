import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { addItem } from "@services/api";
import { toast } from "react-toastify";
import FormInput from "@common/FormInput";
import Button from "@common/Button";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      img: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: addItem,
    onSuccess: (data) => {
      console.log(data);
      toast.success("Item added successfully!");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to add item.");
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
    reset({
      name: "",
      price: "",
      img: "",
    });
  };

  const inputProps = [
    {
      label: "Product Name",
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Name",
      className: "primary-input",
      rules: {
        ...register("name", {
          required: "Product Name is required.",
          minLength: {
            value: 3,
            message: "Product Name should be at-least 3 characters.",
          },
        }),
      },
      error: errors.name,
    },
    {
      label: "Product Price",
      type: "number",
      name: "name",
      id: "name",
      placeholder: "Price",
      className: "primary-input",
      rules: {
        ...register("price", {
          required: "Price is required.",
        }),
      },
      error: errors.price,
    },
    {
      label: "Image Url",
      type: "text",
      name: "img",
      id: "img",
      placeholder: "Image",
      className: "primary-input",
      rules: {
        ...register("img", {
          required: "Image is required.",
        }),
      },
      error: errors.img,
    },
  ];

  return (
    <div className="px-32 py-10">
      <h1 className="text-4xl text-center font-semibold mb-8 font-poppinsSemibold">
        Put Item up for sale
      </h1>

      <form
        className="mt-9 flex flex-col gap-7 w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {inputProps.map((input) => (
          <FormInput
            key={input.name}
            label={input.label}
            type={input.type}
            name={input.name}
            id={input.id}
            placeholder={input.placeholder}
            className={input.className}
            rules={input.rules}
            error={input.error}
          />
        ))}

        <Button type="submit" className="secondary-btn">
          Add Item
        </Button>
      </form>
    </div>
  );
};

export default AddItem;
