
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface Vacancy {
  title: string;
  salary: string;
  experience: string;
}

const Vacancies: React.FC = () => {
  const vacancies: Vacancy[] = [
    { title: 'Инженер-сметчик 1 категории', salary: '80 000', experience: '3–5 лет' },
    { title: 'Токарь', salary: '75 000', experience: '1–2 года' },
    { title: 'Ведущий инженер-конструктор', salary: '70 000', experience: '3–5 лет' },
    { title: 'Наладчик станков и манипуляторов с ПУ', salary: '70 000', experience: '1–2 года' },
    { title: 'Оператор станков с ПУ', salary: '70 000', experience: '1–2 года' },
    { title: 'Шлифовщик', salary: '70 000', experience: '1–2 года' },
    { title: 'Токарь-расточник', salary: '60 000', experience: '1–2 года' },
    { title: 'Инженер по качеству 1 категории', salary: '57 000', experience: '1–2 года' },
    { title: 'Инженер-конструктор', salary: '50 000', experience: 'без опыта' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Актуальные вакансии</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {vacancies.map((vacancy, index) => (
          <Card key={index} className="border-factory-red/20 hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <h3 className="text-lg font-bold text-factory-red mb-2">{vacancy.title}</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="font-medium">Заработная плата:</div>
                <div className="text-right">{vacancy.salary} ₽</div>
                <div className="font-medium">Опыт работы:</div>
                <div className="text-right">{vacancy.experience}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
