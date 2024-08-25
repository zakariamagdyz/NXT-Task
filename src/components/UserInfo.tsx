import { Admin, types } from "../types";

type Props = {
  admin: Admin;
};

const UserInfo = ({ admin }: Props) => {
  return (
    <section className="flex items-center gap-2">
      <img
        src={admin.image}
        alt={admin.name}
        className="w-[34px] h-[34px] rounded-full"
      />
      <p className="text-white">{admin.name}</p>
      {admin.type < 3 && (
        <span className="bg-[#1D1A12] rounded-[16px] px-2">
          {types[admin.type]}
        </span>
      )}
    </section>
  );
};

export default UserInfo;
