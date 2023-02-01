import IconSun from "../Icons/IconSun";
import IconMoon from "../Icons/IconMoon";
const ButtonsChangingTheme=()=>{
    return(
        <article className="rounded-br-full rounded-bl-full rounded-tr-full rounded-tl-full bg-secundaryBlack w-[126px] h-[39px] flex flex-grow gap-[10px] items-center justify-center xl:relative xl:left-[30%] xl:top-[40vh]">
           <IconSun/>
        <article className="cursor-pointer w-[45px] h-[21px] bg-buttoncolor rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-full ">
            <article className="rounded-full duration-[5000ms] transition-all bg-white w-[22px] h-[22px] hover:relative hover:left-[25px] "></article>
        </article>
        <IconMoon/>
       


        </article>
    )
}
export default ButtonsChangingTheme;