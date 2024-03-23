import { useMutation } from "@tanstack/react-query";
import { Switch } from "../ui/switch";
import { toggleBlock } from "@/API/dashboard.api";

export default function BlockToggle({userId,isActive}:{userId:string,isActive:boolean}) {
    const { mutateAsync, } = useMutation({
        mutationFn: toggleBlock,
      
      });    

      const toggle = async () =>{
        await mutateAsync(userId)
      }
    return (
    <Switch onCheckedChange={toggle} defaultChecked={!isActive}/> );
  }