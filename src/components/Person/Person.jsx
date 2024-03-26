export const Person = ({
  person,
  partner = person.sex === 'm' ? 'wife' : 'husband',
}) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
    <p className="Person__partner">
      {person.isMarried
        ? `${person.name} is my ${partner}`
        : 'I am not married'}
    </p>
  </section>
);
