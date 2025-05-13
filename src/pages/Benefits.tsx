
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Стабильность',
      description: 'Официальное трудоустройство и своевременная выплата заработной платы',
      icon: 'Shield'
    },
    {
      title: 'Профессиональное развитие',
      description: 'Программы обучения и повышения квалификации для сотрудников',
      icon: 'GraduationCap'
    },
    {
      title: 'Социальный пакет',
      description: 'Медицинское страхование, санаторно-курортное лечение и другие льготы',
      icon: 'Heart'
    },
    {
      title: 'Командная работа',
      description: 'Дружный коллектив и корпоративные мероприятия',
      icon: 'Users'
    },
    {
      title: 'Инновации',
      description: 'Работа с современным оборудованием и передовыми технологиями',
      icon: 'Lightbulb'
    },
    {
      title: 'Карьерный рост',
      description: 'Возможности для профессионального и карьерного развития',
      icon: 'LineChart'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Почему стоит работать в "Красном Знамени"</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border-factory-red/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-factory-red/10 p-2 rounded-full">
                  <Icon name={benefit.icon} className="h-6 w-6 text-factory-red" />
                </div>
                <h3 className="text-lg font-bold">{benefit.title}</h3>
              </div>
              <p>{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
