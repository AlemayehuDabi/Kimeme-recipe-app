import { TextInput, Label, Button } from "flowbite-react";

const Setting = () => {
  return (
    <section className="w-full h-full bg-gray-100 py-5">
      <div className="w-3/5 bg-white pt-6 pb-3 px-3 mx-auto rounded-lg flex flex-col gap-5">
        <div className="">
          <h1 className="text-4xl font-bold text-red-700">Settings</h1>
        </div>
        <hr className="mb-2  border-red-700" />
        {/* Account Settings */}
        <div className="flex flex-col gap-2 bg-red-100 rounded-lg px-2 py-5 ">
          <h1 className="text-2xl text-red-700 font-semibold">
            Account Settings
          </h1>
          <div>
            <Label
              htmlFor="email1"
              value="Your username"
              className="text-red-600"
            />
            <TextInput placeholder="Your username" />
          </div>
          <div>
            <Label
              htmlFor="email1"
              value="Your email"
              className="text-red-500"
            />
            <TextInput placeholder="Your email adress" />
          </div>
          <div>
            <Label
              htmlFor="email1"
              value="Your password"
              className="text-red-500"
            />
            <TextInput placeholder="Your password" />
          </div>
        </div>
        {/* Privacy Settings */}
        <div className="flex flex-col gap-4 bg-red-100 rounded-lg px-2 py-5 ">
          <h1 className="text-2xl text-red-600 font-semibold">
            Privacy Settings
          </h1>
          <div className="flex flex-col gap-2">
            <Label
              htmlFor="email1"
              value="Profile Visibility"
              className="text-red-500"
            />
            <select id="cars" name="PULIC" className="rounded-md">
              <option value="volvo">Public</option>
              <option value="saab">Private</option>
              <option value="fiat">Friends only</option>
            </select>
          </div>
          <div className="w-3/5 flex justify-between items-center">
            <div className="flex flex-col gap-6 text-sm">
              <p className="text-red-600">Data Sharing</p>
              <p className="text-gray-600">
                Allow data sharing for personalized recommendations
              </p>
            </div>
            <input type="checkbox" />
          </div>
        </div>
        {/* Account Settings */}
        <div className="flex flex-col gap-4 bg-red-100 rounded-lg px-2 py-5 ">
          <h1 className="text-2xl text-red-600 font-semibold">
            Notification Preferences
          </h1>
          <div className="w-3/5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-6 text-sm">
                <p className="text-red-600">Email Notifications</p>
                <p className="text-gray-600">Receive email notifications</p>
              </div>
              <input type="checkbox" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-6 text-sm">
                <p className="text-red-600">Push Notifications</p>
                <p className="text-gray-600">Receive push notifications</p>
              </div>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        {/* Account Settings */}
        <div className=" bg-red-100 rounded-lg pl-5 py-3">
          <Button color="failure">Save Changes</Button>
        </div>
      </div>
    </section>
  );
};

export default Setting;
