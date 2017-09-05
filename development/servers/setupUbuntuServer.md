# Setting up new loraserver  
Download ubuntu-16.04.3-server-amd64.iso  
Download Rufus-2.16.1170  
Create bootable USB  
    - MBR partition scheme for BIOS or UEFI  
    - NTFS file system  
    - 4096 bytes cluster size (default)  
    - Write in ISO Image mode  

Move documents to private cloud storage (mega)  
Reboot server using USB  
Install Ubuntu Server  
Name : dunediniot  
User : dunedinadmin  
Password : *********  
Home directory not encrypted  
Time zone: Pacific/auckland  
/dev/sda not unmounted  
Partition : Guided- use entire disk and set up LVM (default)  
select sda 500GB  
write changes and configure LVM  
499GB (default)  
Force UEFI installation  
No HTTP proxy  
Install security updates automatically  
Default software install.  
reboot  

Loraserver install:
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 1CE2AFD36DBCCA00 
export DISTRIB_ID=`lsb_release -si`
export DISTRIB_CODENAME=`lsb_release -sc`
sudo echo "deb https://repos.loraserver.io/${DISTRIB_ID,,} ${DISTRIB_CODENAME} testing" | sudo tee /etc/apt/sources.list.d/loraserver.list
sudo apt-get update
sudo apt-get -y install lora-gateway-bridge loraserver lora-app-server
sudo apt-add-repository ppa:mosquitto-dev/mosquitto-ppa
sudo apt-get update
sudo apt-get install mosquitto
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo echo "deb http://apt.postgresql.org/pub/repos/apt/ ${DISTRIB_CODENAME}-pgdg main" | sudo tee /etc/apt/sources.list.d/pgdg.list
sudo apt-get update
sudo apt-get install postgresql-9.6
sudo apt-get install redis-server
sudo -u postgres psql
create role loraserver_ns with login password 'dbpassword';
create database loraserver_ns with owner loraserver_ns;
create role loraserver_as with login password 'dbpassword';
create database loraserver_as with owner loraserver_as;
\q
sudo apt-get install openssh-server
openssl rand -base64 32 # copy output
```
Edit the config files /etc/default/loraserver lora-app-server
