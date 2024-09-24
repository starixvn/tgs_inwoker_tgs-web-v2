import { Button } from "@/components/ui";

export const AnonymousHeaderContent = () => {
    return (
        <div className="flex gap-2">
            <Button>
                Login
            </Button>
            <Button variant="secondary">
                Register
            </Button>
        </div>
    );
};