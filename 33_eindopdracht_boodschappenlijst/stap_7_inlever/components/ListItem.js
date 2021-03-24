function ListItem(props) {

  return (
      <li
        key={props.id}
        className={props.className}
        onClick={ (event) => props.handleClick(props.id) }
        value={props.title}
      >
        {props.title}
        { props.targetList === "cart" ? <span className="cart-list-item-amount">Hoeveelheid: {props.amount1}</span> : null }

      </li>
    )
}

export default ListItem;
