import { FieldBase } from '@/shared/ui/FieldBase';

export const FormField = ({ errorMessage, helperText, ...props }) => {
  const shownHelper = errorMessage || helperText;

  return (
    <FieldBase
      {...props}
      fullWidth
      error={Boolean(errorMessage)}
      helperText={shownHelper}
      FormHelperTextProps={{ sx: { marginLeft: 0 } }}
    />
  );
};
