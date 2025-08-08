# 🧰 field-kit

**Field Kit** is a library of accessible and reusable form components for **React**, built on **React Hook Form**, **shadcn**, and **TailwindCSS**. Its goal is to accelerate the development of modern, validatable, and accessible forms from the very beginning.

## ✨ Features

- Direct integration with [`react-hook-form`](https://react-hook-form.com/)
- Styled shadcn.ui components with TailwindCSS, ready for production
- Enhanced accessibility with ARIA support
- Built for dynamic validations
- Easy to extend with new components

---

## 🚀 Installation

```bash
npm install @marlon-chaviano/field-kit
```

or

```bash
pnpm install @marlon-chaviano/field-kit
```

Also, make sure to install the required **peer dependencies** in your project:

```bash
npm install react react-dom react-hook-form tailwindcss
```

or

```bash
pnpm install react react-dom react-hook-form tailwindcss
```

---

## 🧪 Basic Usage

### 📥 `InputField`

This is the base component for text input fields, already integrated with `react-hook-form`.

#### 📌 Usage Example

```tsx
import { InputField } from "field-kit";
import { useForm, FormProvider } from "react-hook-form";

function MyForm() {
	const methods = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				className="space-y-4"
			>
				<InputField
					name="email"
					label="Email Address"
					type="email"
					rules={{ required: "This field is required" }}
					placeholder="Enter your email"
				/>
				<button
					type="submit"
					className="px-4 py-2 bg-blue-500 text-white rounded"
				>
					Submit
				</button>
			</form>
		</FormProvider>
	);
}
```

#### 🔧 Component Props

| Prop       | Type                                    | Description                               |
| ---------- | --------------------------------------- | ----------------------------------------- |
| `name`     | `string`                                | Field name (required for React Hook Form) |
| `label`    | `string` _(optional)_                   | Field label                               |
| `rules`    | `RegisterOptions` _(optional)_          | Validation rules                          |
| `...props` | `InputHTMLAttributes<HTMLInputElement>` | Any other valid `<input />` props         |

---

## 📦 Roadmap

Coming soon, more components will be added, such as:

- `SelectField` (with multiple options)
- `DatePickerField`
- `TextAreaField`
- `CheckboxField`
- `SwitchField`
- And more...

---

## 🤝 Contributions

Contributions, ideas, and suggestions are welcome! Feel free to open an `issue` or submit a `pull request`.

---

## 📄 License

ISC
