import React from 'react'

const products=[
    {
        id: 1,
        name: "Luffy",
        group: "mongfang"
    },
    {
        id: 2,
        name: "Zoro",
        group: "mongfang"
    },
    {
        id: 3,
        name: "Sunji",
        group: "mongfang"
    },
    {
        id: 4,
        name: "SaBo",
        group: "revolution"
    }
]

export default function Products() {
  return (
    <div>
      {products.map(m=> (
        <div 
            key={m.id}
            style={{
                color: m.group === "mongfang" ? 'gold': 'blue'
            }}
            >
            {m.name}
        </div>
      ))}
    </div>
  )
}
