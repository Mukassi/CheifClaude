import chefImg from '../assets/chef-claude-icon.png';

export default function Header() {
  return (
    <header className="flex justify-center items-center gap-2.5 h-28 shadow-xl">
      <img src={chefImg} className="w-[43px] h-[52px]" />
      <h1 className="text-[#141413] text-3xl font-medium">Chef Claude</h1>
    </header>
  );
}
