import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '../../../../../../constants';
import { auth } from '@clerk/nextjs';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  // Destructure userId directly from auth() function call
  const { userId } =  auth();

  // If userId doesn't exist, redirect to sign-in page
  if (!userId) {
    redirect('/sign-in');
    return null; // Make sure to return null or some loading indicator to avoid rendering further
  }

  const transformation = transformationTypes[type];
  const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
}

export default AddTransformationTypePage;
