import { useItemStore } from '../stores/itemsStore'
import Button from './Button'

export default function ButtonGroup() {
	const markAllAsComplete = useItemStore(state => state.markAllAsComplete);
	const markAllAsIncomplete = useItemStore(state => state.markAllAsIncomplete);
	const resetToInitial = useItemStore(state => state.resetToInitial);
	const removeAllItem = useItemStore(state => state.removeAllItem);

	return (
		<section className='button-group'>
			<Button onClick={markAllAsComplete} buttonType='secondary'>
				Mark all as complete
			</Button>
			<Button onClick={markAllAsIncomplete} buttonType='secondary'>
				Mark all as incomplete
			</Button>
			<Button onClick={resetToInitial} buttonType='secondary'>
				Reset to initial
			</Button>
			<Button onClick={removeAllItem} buttonType='secondary'>
				Remove all items
			</Button>
		</section>
	)
}
