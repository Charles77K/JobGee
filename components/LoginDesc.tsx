interface ILoginDesc {
  icon: React.ReactElement;
  title: string;
  description: string;
}

function LoginDesc({ icon, title, description }: ILoginDesc) {
  return (
    <div className="flex gap-2 items-center py-1">
      <p className="flex-center h-10 w-10 bg-[#a366ff] rounded-full">{icon}</p>
      <section className="flex flex-col">
        <p className="heading text-white text-lg">{title}</p>
        <p>{description}</p>
      </section>
    </div>
  );
}

export default LoginDesc;
