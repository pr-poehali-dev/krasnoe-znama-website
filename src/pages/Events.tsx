
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Events: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">События завода</h2>
      
      <Card className="max-w-3xl mx-auto border-factory-red/20">
        <CardContent className="p-6">
          <div className="space-y-4">
            <img 
              src="https://cdn.poehali.dev/files/81d66e0c-72e7-4e96-9a15-e298f390cad2.png" 
              alt="Мотопробег в честь 80-летия Победы" 
              className="w-full h-auto rounded-lg shadow-md mb-4"
            />
            
            <p className="text-lg">
              В знаменательную дату 9 мая 2025 года в Рязани прошёл мотопробег, посвящённый 80-летию Победы. 
              В этом году участниками мотопробега стало более 50 единиц техники. «Участвую во всех памятных и 
              патриотических акциях, которые проводятся среди любителей мотоспорта. Для меня это возможность 
              выразить свое уважение к подвигу поколения Победителей, – делится молодой работник завода 
              «Красное знамя» Денис.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;
