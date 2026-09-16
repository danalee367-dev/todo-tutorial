import { TodoList } from "@/components/todo-list"
import { AuroraText } from "@/components/ui/aurora-text"

export default function Page() {
  const title = (
    <h1 className="text-3xl font-bold tracking-tight">
      ✨{" "}
      <AuroraText colors={["#166534", "#16A34A", "#4ADE80", "#86EFAC"]}>
        To Do
      </AuroraText>
    </h1>
  )

  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col gap-6">
        <div>{title}</div>
        <TodoList />
      </div>
    </div>
  )
}
