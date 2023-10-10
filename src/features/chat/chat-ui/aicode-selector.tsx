import Typography from "@/components/typography";
import { Card } from "@/components/ui/card";
import { FC, useState } from "react";

import { AICODETaskSelector } from "./aicode-task-selector";
import { QALanguageSelector } from "./qa-language-selector";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
interface Prop {
  task: string;
  language: string;
  onTaskChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
  handleInputChange: (e: any) => void;
}

export const AICODESelector: FC<Prop> = (props) => {

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
  };


  const code_language_options = ['Python', 'Java', 'Javascript', 'C#']

  const [options, setOptions] = useState(code_language_options);

  const onTaskTypeChange = (value: string) => {
    props.onTaskChange(value);
    setOptions(value === 'code_creation' ? code_language_options : code_language_options);
  }


  return (
    <div className="w-full items-center container mx-auto max-w-4xl justify-center gap-9">
      {/* <div className="gap-5 flex flex-col flex-1 row-span-1">
        <Typography variant="h4">Bye!</Typography>
        <p className="">
          Start by just typing your message in the box below. You can also
          personalise the chat by making changes to the settings on the right.
        </p>
      </div> */}
      <Card className="col-span-5 flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Select the task
          </p>
          <AICODETaskSelector
            disable={false}
            task={props.task}
            onTaskChange={onTaskTypeChange}
            handleInputChange={props.handleInputChange}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            Choose a target language
          </p>
          <QALanguageSelector
            options={options}
            selectedOption={options[0]}
            onSelectedChanged={props.onLanguageChange}
            disable={false}
          />
        </div>
      </Card>
    </div>
  );
};
