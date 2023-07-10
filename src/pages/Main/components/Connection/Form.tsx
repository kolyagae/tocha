export const Form = () => {
  return (
    <form className="mt-8 flex">
      <input
        className="h-[52px] w-[248px] rounded-l-lg bg-[#F4F5F7] py-[14px] px-[16px] outline-none placeholder:text-[#474A57]"
        type="email"
        placeholder="Введите e-mail"
      />
      <button
        className="rounded-r-lg bg-black px-5 py-2.5 font-gilroy-700 text-base text-white"
        type="submit"
      >
        Отправить
      </button>
    </form>
  );
};
