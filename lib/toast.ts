import { toast } from "sonner";

export class ShowToast {
  public message: string;
  constructor(message: string) {
    this.message = message;
  }
  static success(message: string) {
    return toast.message(message, {
      position: "top-right",
      duration: 2000,
      style: {
        color: "green",
      },
    });
  }
  static error(message: string) {
    return toast.error(message, {
      position: "top-right",
      duration: 2000,
      style: {
        color: "red",
      },
    });
  }
}
