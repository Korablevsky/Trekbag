export default function Counter({ numberOfItemPacked, totalNumberOfItems }) {
	return (
		<div>
			<b>{numberOfItemPacked}</b> / {totalNumberOfItems} items packed
		</div>
	)
}
