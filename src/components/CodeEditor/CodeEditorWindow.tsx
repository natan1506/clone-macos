import { useState } from "react";
import Editor from "@monaco-editor/react";

export function CodeEditorWindow({ themeLocal }: any) {

  return (
    <Editor
      height="85vh"
      width={`100%`}
      language={"javascript"}
      theme={themeLocal === "light" ? "light" : "vs-dark"}
    />
  )
}