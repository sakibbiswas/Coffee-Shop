
import MenuCard from './MenuCard'
import { menuItems } from '../data/menuItems'

export default function MenuSection() {
  return (
    <div className="py-16">
      <h2 className="mb-6 text-3xl font-bold">Our Menu</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {menuItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
