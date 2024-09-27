import {
  HoverCard as HoverCardComponent,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui";

type Props = {
  children: React.ReactNode;
  trigger: React.ReactNode;
};

export const HoverCard = ({ children, trigger }: Props) => {
  return (
    <HoverCardComponent>
      <HoverCardTrigger>{trigger}</HoverCardTrigger>
      <HoverCardContent className="w-screen rounded-none">
        {children}
      </HoverCardContent>
    </HoverCardComponent>
  );
};
