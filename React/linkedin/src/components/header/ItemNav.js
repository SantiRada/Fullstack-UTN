export function ItemNav({name, Icon, clicNavItem, item}){
    return(
        <a className={ item == name ? "item-nav select" : "item-nav" } onClick={ () => clicNavItem(name) }>
            <Icon size={24} />
            {name}
        </a>
    );
}
