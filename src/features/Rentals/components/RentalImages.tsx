type RentalImages = {
  images: string[];
};

const RentalImages = ({ images }: RentalImages) => {
  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-4">
      <div className="col-span-3 row-span-6">1</div>
      <div className="col-span-2 row-span-3 col-start-4">2</div>
      <div className="col-span-2 row-span-3 col-start-4 row-start-4">3</div>
      <div className="col-span-2 row-span-3 col-start-6 row-start-1">4</div>
      <div className="col-span-2 row-span-3 col-start-6 row-start-4">5</div>
    </div>
  );
};

export default RentalImages;
