type EmployeeSectionTypes = React.ComponentProps<'section'> & {
    department: string;
    children: React.ReactNode;
}

export default function EmployeeSection( { department, children, ...props} : EmployeeSectionTypes ) {
    return <>
        <section {...props}>
            <h2 className="department">{department}</h2>
            {children}
        </section>
    </>
}