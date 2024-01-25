import ServiceCard from "./ui/ServiceCard"
import { Product } from "@/types"

interface ServiceListProps{
  items: Product[]
}

function ServiceList({items}:ServiceListProps) {
  return (
    <section
      id="services"
      className="relative space-y-4 pb-32 pt-24 flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 bg-[#ff9100]">
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
        {items.map((item) => (
          <ServiceCard key={item.id} data={item} />
        ))}
      </div>
      <div className="div-with-spill-svg xl:xl-div-with-spill-svg"></div>
    </section>
  );
}

export default ServiceList