import React from "react";

const ContactUs = () => {
  const contacts = [
    {
      id: 1,
      name: "Vincia Levina Chandra",
      nim: "220401010005",
      email: "vincialevinachandra@gmail.com",
    },
    {
      id: 2,
      name: "Muhammad Ilyas",
      nim: "200401010055",
      email: "muhammadilyassaya@gmail.com",
    },
    {
      id: 3,
      name: "Eka Chelsea Alexandra",
      nim: "220401010008",
      email: "alexandraolshop@gmail.com",
    },
    {
      id: 4,
      name: "Faizal Fathurrohman",
      nim: "200401010026",
      email: "Faizalfathurrohman98@gmail.com",
    },
    {
      id: 5,
      name: "Cintya larasati",
      nim: "220401010021",
      email: "cintyalarasati01@gmail.com",
    },
  ];
  return (
    <main className="px-2 md:px-4 max-w-5xl mx-auto min-h-[80vh]">
      <h2 className="text-2xl md:text-[2rem] font-semibold mb-6">Contact Us</h2>
      <div className="grid grid-cols-12 gap-4">
        {contacts.map((contact, i) => (
          <div className="col-span-12 md:col-span-6" key={i}>
            <div className="card bg-slate-50 p-4 rounded-md">
              <div className="flex flex-col items-center justify-center h-20">
                <p className="text-xl md:text-2xl font-semibold border-b border-slate-800">
                  {contact.name}
                </p>
                <p className="font-medium text-slate-700">NIM: {contact.nim}</p>
              </div>
              <a className="text-center w-full block text-blue-500 hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ContactUs;
