import { useMemo, useState } from 'react'
import Select from 'react-select'

import { useItemStore } from '../stores/itemsStore'
import EmptyView from './EmptyView'

const sortingOptions = [
	{
		label: 'sort by default',
		value: 'default',
	},
	{
		label: 'sort by packed',
		value: 'packed',
	},
	{
		label: 'sort by unpacked',
		value: 'unpacked',
	},
]

export default function ItemList() {
	const [sortBy, setSortBy] = useState('default')

	const items = useItemStore(state => state.items)
	const deleteItem = useItemStore(state => state.deleteItem)
	const toggleItem = useItemStore(state => state.toggleItem)

	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sortBy === 'packed') {
					return b.packed - a.packed
				}

				if (sortBy === 'unpacked') {
					return a.packed - b.packed
				}

				return
			}),
		[items, sortBy]
	)

	return (
		<ul className='item-list'>
			{items.length === 0 && <EmptyView />}
			{items.length > 0 ? (
				<section className='sorting'>
					<Select
						onChange={options => setSortBy(options.value)}
						defaultValue={sortingOptions[0]}
						options={sortingOptions}
					/>
				</section>
			) : null}
			{sortedItems.map(item => {
				return (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={deleteItem}
						onToggleItem={toggleItem}
					/>
				)
			})}
		</ul>
	)
}
function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li className='item'>
			<label>
				<input
					onChange={() => onToggleItem(item.id)}
					checked={item.packed}
					type='checkbox'
				/>
				{item.name}
			</label>

			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	)
}
