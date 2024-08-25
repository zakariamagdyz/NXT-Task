type TagProps = {
  tagName: string;
};
const Tag = ({ tagName }: TagProps) => {
  return (
    <span className="bg-[#252525] px-2 py-1 rounded-[16px]">{tagName}</span>
  );
};

export default Tag;
