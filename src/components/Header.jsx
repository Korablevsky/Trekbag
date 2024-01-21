import { useItemStore } from '../stores/itemsStore'
import Counter from './Counter'
import Logo from './Logo'

export default function Header() {
	const items = useItemStore(state => state.items);
	return (
		<header>
			<Logo />
			<Counter
				numberOfItemPacked={items.filter(item => item.packed).length}
				totalNumberOfItems={items.length}
			/>
		</header>
	)
}
