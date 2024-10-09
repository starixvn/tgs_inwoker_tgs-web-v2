import { useBrandData, useStoreTemplate } from "@/lib";
import { BRAND_CODE, TEMPLATE } from "@/types";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui";

export const TemplateSelect = () => {
  const { template, onChange } = useStoreTemplate();
  const brandData = useBrandData();
  const isShowSelect = brandData?.code === BRAND_CODE.GPI;

  if (!isShowSelect) return null;

  return (
    <Select
      value={template}
      onValueChange={(template: TEMPLATE) => onChange(template)}
    >
      <SelectTrigger className="w-[180px] fixed bottom-1 right-1 bg-foreground text-background">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {Object.values(TEMPLATE).map((template) => (
          <SelectItem key={template} value={template}>
            {template}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
