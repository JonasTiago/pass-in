import { ComponentProps } from 'react' 

interface NavLinkPros extends ComponentProps<'a'> {}

export function NavLink(props: NavLinkPros){
    return ( 
        <a { ...props } className="font-medium text-sm" />
    )
}