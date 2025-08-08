# 🧰 field-kit

**Field Kit** es una librería de componentes de formularios accesibles y reutilizables para **React**, basada en **React Hook Form** y **TailwindCSS**. Su objetivo es acelerar el desarrollo de formularios modernos, validables y accesibles desde el primer momento.

## ✨ Características

- Integración directa con [`react-hook-form`](https://react-hook-form.com/)
- Componentes estilizados con TailwindCSS y listos para producción
- Accesibilidad mejorada con soporte para ARIA
- Preparado para validaciones dinámicas
- Fácil de extender con nuevos componentes

---

## 🚀 Instalación

```bash
npm install @marlon-chaviano/field-kit"
```

o

```bash
pnpm install @marlon-chaviano/field-kit"
```

También asegúrate de tener instaladas las **peer dependencies** requeridas en tu proyecto:

```bash
npm install react react-dom react-hook-form tailwindcss
```

o

```bash
npm install react react-dom react-hook-form tailwindcss
```

---

## 🧪 Uso Básico

### 📥 `InputField`

Este es el componente base para campos de entrada de texto, ya integrado con `react-hook-form`.

#### 📌 Ejemplo de uso

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

#### 🔧 Props del componente

| Prop       | Tipo                                    | Descripción                                       |
| ---------- | --------------------------------------- | ------------------------------------------------- |
| `name`     | `string`                                | Nombre del campo (requerido para React Hook Form) |
| `label`    | `string` _(opcional)_                   | Etiqueta del campo                                |
| `rules`    | `RegisterOptions` _(opcional)_          | Reglas de validación                              |
| `...props` | `InputHTMLAttributes<HTMLInputElement>` | Cualquier otra prop válida de un `<input />`      |

---

## 🧱 Estructura del paquete

```
/src
  /components
    /ui
      input.tsx        → Estilizado base
    InputField.tsx      → Componente actual publicado
  /lib
    utils.ts           → Función cn para combinar clases (tipo clsx)
```

---

## 📦 Roadmap

Próximamente se incluirán más componentes como:

- `SelectField` (con múltiples opciones)
- `DatePickerField`
- `TextAreaField`
- `CheckboxField`
- `SwitchField`
- Y más...

---

## 🤝 Contribuciones

¡Contribuciones, ideas y sugerencias son bienvenidas! Siéntete libre de abrir un `issue` o enviar un `pull request`.

---

## 📄 Licencia

ISC
