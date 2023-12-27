import DashboardComponent from '@/components/dashboard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { Combobox } from '@/components/combobox';
import { InvoicesComponent } from '@/components/invoices';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-center">
      <Tabs defaultValue="dashboard" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="invoices">Biblioteca de Faturas</TabsTrigger>
          <Combobox />
        </TabsList>
        <TabsContent value="dashboard">
          <DashboardComponent />
        </TabsContent>
        <TabsContent value="invoices">
          <InvoicesComponent />
        </TabsContent>
      </Tabs>
    </main>
  );
}
