function Item({ item, onAlternar, onRemover }) {
  return (
    <li className={item.comprado ? "comprado" : ""}>
      <span>{item.texto}</span>

      {/* tem argumento (item.id), então precisa da setinha */}
      <button onClick={() => onAlternar(item.id)}>
        {item.comprado ? "Desfazer" : "Comprado"}
      </button>
      <button onClick={() => onRemover(item.id)}>Apagar</button>
    </li>
  );
}

export default Item;