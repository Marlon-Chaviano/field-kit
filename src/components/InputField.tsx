import { RegisterOptions, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	rules?: RegisterOptions;
	label?: string;
}

function InputField({
	name,
	label,
	rules,
	className,
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
					<span className="text-red-600">*</span>
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
				<p className="text-sm text-red-500">{(error as any).message}</p>
			)}
		</div>
	);
}
export default InputField;
