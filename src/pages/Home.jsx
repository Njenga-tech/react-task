import Layout from '../components/layout';
import Card from '../components/card';
import Button from '../components/button';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">BODA BODA SERVICES AROUND GARISSA TOWNSHIP </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 ">
        <Card 
        title="Mr Wagon" 
        content="boda." 
        image ="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg"
        />
        <Card
         title="Mr True" 
         content="Boda." 
         image ="https://images.pexels.com/photos/1715184/pexels-photo-1715184.jpeg"
         />
        <Card 
        title="Mr Killer" 
        content="Boda." 
        image ="https://images.pexels.com/photos/2549941/pexels-photo-2549941.jpeg"
        />
        <Card title="Mr Honest" 
        content="boda." 
        image = "https://images.pexels.com/photos/28242858/pexels-photo-28242858.jpeg"
        />
        <Card 
        title="Mr Stone" 
        content="Boda."
        image ="https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg" 
        />
      </div>
      <div className="mt-4 flex gap-4">
        <Button variant="primary">sign up</Button>
        <Button variant="secondary">login</Button>
        <Button variant="danger">log out</Button>
      </div>
      <h1 className="text-3xl font-bold mb-4">  TUK TUK SERVICES AROUND GARISSA TOWNSHIP</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 ">
        <Card 
        title="Mr WORK" 
        content="TUKTUK." 
        image ="https://images.pexels.com/photos/8763388/pexels-photo-8763388.jpeg"
        />
        <Card
         title="Mr TRY" 
         content="TUKTUK." 
         image ="https://images.pexels.com/photos/18094916/pexels-photo-18094916.jpeg"
         />
        <Card 
        title="Mr Wish" 
        content="TUKTUK." 
        image ="https://images.pexels.com/photos/12081246/pexels-photo-12081246.jpeg"
        />
        <Card title="Mr Play" 
        content="TUKTUK." 
        image = "https://images.pexels.com/photos/13754631/pexels-photo-13754631.jpeg"
        />
        <Card 
        title="Mr Ball" 
        content="TUKTUK."
        image ="https://images.pexels.com/photos/16670151/pexels-photo-16670151.jpeg" 
        />
      </div>

    </Layout>
  );
}
