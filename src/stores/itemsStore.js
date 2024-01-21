import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initialItems } from '../lib/constants'

export const useItemStore = create(
	persist(
		set => ({
			items: initialItems,
			addItem: newItemText => {
				const newItem = {
					id: new Date().getTime(),
					name: newItemText,
					packed: false,
				}
				set(state => ({ items: [...state.items, newItem] }))
			},
			deleteItem: itemId => {
				set(state => {
					const newItems = state.items.filter(item => item.id !== itemId)

					return { items: newItems }
				})
			},
			toggleItem: itemId => {
				set(state => {
					const newItems = state.items.map(item => {
						if (item.id === itemId) {
							return { ...item, packed: !item.packed }
						}
						return item
					})

					return { items: newItems }
				})
			},
			removeAllItem: () => {
				set(() => ({ items: [] }))
			},
			resetToInitial: () => {
				set(() => ({ items: initialItems }))
			},
			markAllAsComplete: () => {
				set(state => {
					const newItems = state.items.map(item => {
						return { ...item, packed: true }
					})

					return { items: newItems }
				})
			},
			markAllAsIncomplete: () => {
				set(state => {
					const newItems = state.items.map(item => {
						return { ...item, packed: false }
					})

					return { items: newItems }
				})
			},
		}),
		{
			name: 'items',
		}
	)
)
