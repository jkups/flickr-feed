interface TagsProps {
  tags: string;
}

export const Tags = ({ tags }: TagsProps) => {
  const tagsCollection = tags.split(" ");
  return (
    <div className="flex flex-wrap gap-0.5">
      {tagsCollection.map((tag, idx) => (
        <span
          key={idx}
          className="px-1 py-0.5 text-xs rounded-md bg-pink-300 text-pink-800"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
