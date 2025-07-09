import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const foodItems = [
  {
    name: "Baati Chokha",
    desc: "Traditional dish made of wheat dough balls and mashed spiced vegetables.",
  },
  {
    name: "Malaiyo",
    desc: "Winter specialty – a fluffy, sweet, saffron-infused milk foam delicacy.",
  },
  {
    name: "Jalebi",
    desc: "A spiral-shaped sweet soaked in sugar syrup, crispy and juicy.",
  },
  {
    name: "Rasawala Aloo",
    desc: "A tangy potato curry usually served with puris.",
  },
  {
    name: "Kachori Gali",
    desc: "A tangy potato curry usually served with puris and all famous of dish we get there.",
  },

];

const FoodSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className='mt-20 my-[100px] px-10' data-aos='fade-up'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
        <div
          className='h-full bg-no-repeat bg-right bg-cover flex items-center justify-center p-4'
          style={{
            backgroundImage: 'url("/Images/food/image.jpeg")',
            backgroundSize: '90%',
            backgroundPosition: 'right',
          }}
        >
          <img
            src='/Images/food/images.jpeg'
            alt='Food'
            className='w-[800px] h-64 object-contain'
          />
        </div>

        <div className='text-left'>
          <h2 className='text-orange-500 mb-6 text-4xl font-semibold'>Foods</h2>

          <ul className='space-y-6 text-sm text-[#0F172A]'>
            <li>
              <h3 className='font-medium text-lg'>Kachori Sabzi</h3>
              <p className='text-amber-950'>Spicy curry served with crispy kachoris, a popular Varanasi breakfast.</p>
            </li>
            <li>
              <h3 className='font-medium text-lg'>Banarasi Paan</h3>
              <p className='text-amber-950'>A cultural icon of Varanasi, known for its sweet flavor and aroma.</p>
            </li>
            <li>
              <h3 className='font-medium text-lg'>Tamatar Chaat</h3>
              <p className='text-amber-950'>Tangy tomato-based chaat unique to the streets of Varanasi.</p>
            </li>
            <li>
              <h3 className='font-medium text-lg'>Launglata</h3>
              <p className='text-amber-950'>Sweet and flaky dessert stuffed with khoya and dry fruits.</p>
            </li>
            <li>
              <h3 className='font-medium text-lg'>Thandai</h3>
              <p className='text-amber-950'>A cooling drink made with milk, dry fruits, and flavored with saffron and spices.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex justify-center items-center mt-20'>
        <button
          onClick={openDialog}
          className='bg-orange-500 text-white w-44 h-12 rounded hover:bg-orange-600 transition'
        >
          See All →
        </button>
      </div>

      {/* Dialog for Extra Foods */}
      <Dialog open={isOpen} onClose={closeDialog} className="relative z-50">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 max-w-xl w-full shadow-xl">
            <Dialog.Title className="text-2xl font-semibold text-orange-600 mb-4">
              More Traditional Foods 🍲
            </Dialog.Title>

            <ul className="space-y-4 text-[#0F172A] text-sm">
              {foodItems.map((food, index) => (
                <li key={index}>
                  <h3 className="font-semibold text-lg">{food.name}</h3>
                  <p className="text-amber-800">{food.desc}</p>
                </li>
              ))}
            </ul>

            <button
              onClick={closeDialog}
              className="mt-6 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-300"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default FoodSection;
