
import { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, ClipboardIcon } from "lucide-react";

interface CopyButtonProps {
    message: string;
  }

const CopyButton: FC<CopyButtonProps> = (props) => {
    
    const [isIconChecked, setIsIconChecked] = useState(false);

    const toggleIcon = () => {
      setIsIconChecked((prevState) => !prevState);
    };
  
    const handleButtonClick = () => {
      toggleIcon();
      navigator.clipboard.writeText(props.message);
    };

    return (
              <Button
                variant={"ghost"}
                size={"sm"}
                title="Copy text"
                className="justify-right flex"
                onClick={handleButtonClick}
              >
                {isIconChecked ? (
                  <CheckIcon size={16} />
                ) : (
                  <ClipboardIcon size={16} />
                )}
              </Button>        
    );
  };
  
  export default CopyButton;
  