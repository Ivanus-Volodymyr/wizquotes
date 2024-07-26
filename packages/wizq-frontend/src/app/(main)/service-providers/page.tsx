'use client';

import React, { useEffect, useState } from 'react';
import { useGetUserDataQuery } from '../../../store/users';
import { UserType1 } from '../../../types';
import { UserData } from '../../../types/user';
import ServiceProviderListItem from '../../../components/service-providers/ServiceProviderListItem';
import { useSelector } from '../../../store';
import { useGetSelectedProjectQuery } from '../../../store/projects';

const ServiceProvidersPage = () => {
  const selectedProject = useSelector((state) => state.project.selectedProject);
  useGetSelectedProjectQuery(selectedProject.id, { skip: !selectedProject.id });
  const { data } = useGetUserDataQuery({ type: UserType1.SERVICE_PROVIDER });

  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    const users = data as unknown as UserData[];
    const filter = users?.filter((rs: UserData) => {
      if (rs.subType === 'PROVIDER' || 'DESIGNER') {
        return rs;
      }
    });

    setUserData(filter);
  }, [data]);

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-rows-2 lg:grid-rows-none lg:gap-x-14 gap-y-14">
        <div className="lg:col-span-2">
          <div className="px-7">
            <p className="text-xl lg:text-[40px] font-medium font-montserrat mb-6">Connect with a service provider</p>
            <p className="text-base text-[#0D1835]">
              We’ve put together a list of service providers that match your project
            </p>
          </div>
          <ul className="mt-9">
            {userData?.map((item: UserData, key: number) => (
              <ServiceProviderListItem key={key} data={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceProvidersPage;
