import FilterSideBar from "./category-picker";
import FilterBar from "./filter-bar";
import ListingGrid from "./listing-grid";

const Listing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start items-center md:items-start md:px-md py-24 w-screen gap-8">
      <FilterSideBar />
      <main className="flex flex-col gap-8 w-full">
        <FilterBar />
        <ListingGrid />
      </main>
    </div>
  );
};

export default Listing;
