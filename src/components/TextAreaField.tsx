import { useFormContext, type RegisterOptions } from "react-hook-form";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { cn } from "../lib/utils";

interface FormFieldProps extends React.ComponentProps<"textarea"> {
	name: string;
	label?: string;
	className?: string;
	errorClassName?: string;
	rules?: RegisterOptions;
}

export function TextAreaField({
	name,
	label,
	rules,
	className,
	errorClassName,
	...props
}: FormFieldProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const error = errors[name];
	return (
		<div className="grid w-full gap-3">
			{label && (
				<Label
					className="mb-2 font-medium text-gray-600"
					htmlFor={name}
				>
					{label}
					{rules?.required && <span className="text-red-600">*</span>}
				</Label>
			)}

			<Textarea
				id={name}
				{...props}
				aria-invalid={!!error}
				className={cn("border", className, {
					"border-red-500": error,
				})}
				{...register(name, rules)}
			/>
		</div>
	);
}
