import { RegisterOptions, useFormContext } from "react-hook-form";
import { cn } from "../lib/utils";
import { Input } from "../components/ui/input";
import Error from "./Error";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	rules?: RegisterOptions;
	errorClassName?: string;
	label?: string;
}

function InputField({
	name,
	label,
	rules,
	className,
	errorClassName,
	...props
}: InputFieldProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const error = errors[name];

	return (
		<div className="space-y-2">
			{label && (
				<label
					htmlFor={name}
					className="text-sm font-medium"
				>
					{label}
					{rules?.required && <span className="text-red-600">*</span>}
				</label>
			)}
			<Input
				id={name}
				{...register(name, rules)}
				aria-invalid={!!error}
				className={cn("border", className, {
					"border-red-500": error,
				})}
				{...props}
			/>
			{error && (
				<Error
					className={cn("", errorClassName)}
					message={error.message as string}
				/>
			)}
		</div>
	);
}
export default InputField;
