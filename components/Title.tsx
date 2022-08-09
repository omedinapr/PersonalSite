import RedLine from "./RedLine";

interface IProps {
    title: string
}
const Title = ({ title }: IProps) => {
    function spacedTitle(title: string) {
        return title.split("")
            .map(c => {
                return c + " "
            })
            .join("");
    }
    return (
        <div className='flex flex-col items-center justify-around'>
            <h3 className="py-8 text-3xl font-bold uppercase">{spacedTitle(title)}</h3>
            <RedLine />
        </div>
    );
};

export default Title;